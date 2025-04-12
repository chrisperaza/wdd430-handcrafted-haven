'use server'

import { checkAuth } from "./auth";
import { redirect } from 'next/navigation'
import {createReview} from "./data";


export async function submitReview(formData: FormData) {

      const user = await checkAuth();
      if (!user) {
          redirect('/login');

    }

    const content = formData.get('review') as string | null;  
    const rating = formData.get('rating') as string | null;  
    const productId = formData.get('product_id') as string | null;
    const userId = user.id;
  
    if (!content || !rating) {
      throw new Error('Content and rating are required.');
    }

    if (!productId) {
      throw new Error('Product ID is required.');
    }

    if (!userId) {
      throw new Error('User ID is required.');
    }

    const review = await createReview(productId, userId, parseInt(rating), content);
    if (!review) {
        throw new Error('Failed to create review.');
        }
    redirect(`/products/${productId}`);
  
    

    
  
  }
  
