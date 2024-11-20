import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Sticky } from '../types';
import { uploadImage, deleteImage } from './storage';

const STICKIES_COLLECTION = 'stickies';

export const createSticky = async (sticky: Omit<Sticky, 'id'>, imageFile?: File): Promise<Sticky> => {
  try {
    let imageUrl = sticky.imageUrl;
    
    if (imageFile) {
      imageUrl = await uploadImage(imageFile);
    }
    
    const docRef = await addDoc(collection(db, STICKIES_COLLECTION), {
      ...sticky,
      imageUrl,
      createdAt: new Date(),
    });
    
    return {
      ...sticky,
      id: docRef.id,
      imageUrl: imageUrl || '',
    };
  } catch (error) {
    console.error('Error creating sticky:', error);
    throw error;
  }
};

export const updateSticky = async (
  id: string,
  updates: Partial<Sticky>,
  newImageFile?: File
): Promise<void> => {
  try {
    const stickyRef = doc(db, STICKIES_COLLECTION, id);
    
    if (newImageFile) {
      // Delete old image if it exists
      if (updates.imageUrl) {
        await deleteImage(updates.imageUrl);
      }
      
      // Upload new image
      updates.imageUrl = await uploadImage(newImageFile);
    }
    
    await updateDoc(stickyRef, updates);
  } catch (error) {
    console.error('Error updating sticky:', error);
    throw error;
  }
};

export const deleteSticky = async (id: string, imageUrl?: string): Promise<void> => {
  try {
    if (imageUrl) {
      await deleteImage(imageUrl);
    }
    
    await deleteDoc(doc(db, STICKIES_COLLECTION, id));
  } catch (error) {
    console.error('Error deleting sticky:', error);
    throw error;
  }
};

export const getUserStickies = async (userId: string): Promise<Sticky[]> => {
  try {
    const q = query(
      collection(db, STICKIES_COLLECTION),
      where('author.id', '==', userId),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Sticky[];
  } catch (error) {
    console.error('Error getting user stickies:', error);
    throw error;
  }
};

export const getPublicStickies = async (): Promise<Sticky[]> => {
  try {
    const q = query(
      collection(db, STICKIES_COLLECTION),
      where('isPublic', '==', true),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Sticky[];
  } catch (error) {
    console.error('Error getting public stickies:', error);
    throw error;
  }
};