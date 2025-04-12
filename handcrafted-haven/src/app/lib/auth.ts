'use server'

import { redirect } from 'next/navigation'
import { loginUser, createUser } from './data'
import { cookies } from 'next/headers'

export async function login(formData: FormData) {
  const email = formData.get('email') as string | null
  const password = formData.get('password') as string | null

  if (!email || !password) {
    throw new Error('Email and password are required.')
  }

  const user = await loginUser(email, password)
  if (!user) {
    throw new Error('Invalid email or password.')
  }

  const cookieStore = await cookies()
  cookieStore.set('user', JSON.stringify(user))

  redirect('/')
}

export async function checkAuth() {
  const cookieStore = await cookies()
  const user = cookieStore.get('user')
  return user ? JSON.parse(user.value) : null
}


export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('user')
  redirect('/login')
}
export async function signup(formData: FormData) {
    const name = formData.get('name') as string | null
    const email = formData.get('email') as string | null
    const password = formData.get('password') as string | null
    const confirmPassword = formData.get('password_confirm') as string | null
    const username = formData.get('username') as string | null
    if (password !== confirmPassword) {
        throw new Error('Passwords do not match.')
    }
    
    if (!name || !email || !password || !username) {
        throw new Error('All fields are required.')
    }
    
    const user = await createUser(name, email, password, username)
    if (!user) {
        throw new Error('Failed to create user.')
    }

    const cookieStore = await cookies()
    cookieStore.set('user', JSON.stringify(user))

    redirect('/')
    }