'use server';

import { randomUUID } from "crypto"

export const createProduct = async (formData: FormData) => {
    "use server"
    const productName = formData.get('productName')
    const productPrice = formData.get('productPrice')

    if(!productName || productPrice) return

    const newProduct = {
      name: productName,
      price: productPrice, 
      id: randomUUID()
    }
  }