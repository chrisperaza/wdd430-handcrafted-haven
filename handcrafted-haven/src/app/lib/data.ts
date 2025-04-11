import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function createUser(
  name: string,
  email: string,
  password: string,
  avatar: string,
) {
  try {
    const data = await sql`
      INSERT INTO User (name, email, password, avatar)
      VALUES (${name}, ${email}, ${password}, ${avatar})
      RETURNING *
    `;

    return data[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create user.');
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const data = await sql`
      SELECT * FROM User
      WHERE email = ${email} AND password = ${password}
    `;

    return data[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to login user.');
  }
}

export async function getProductById(id: string) {
  try {
    const data = await sql`
      SELECT * FROM product
      WHERE id = ${id}
    `;

    return data[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch product.');
  }
}

export async function getProducts() {
  try {
    const data = await sql`
      SELECT * FROM product
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}

export async function getProductReviews(productId: string) {
  try {
    const data = await sql`
      SELECT * FROM review
      WHERE product_id = ${productId}
    `;

    // Conciliate the reviews with the user
    const reviewsWithUser = await Promise.all(
      data.map(async (review) => {
        const user = await sql`
          SELECT id, name, email, avatar FROM "User"
          WHERE id = ${review.user_id}
        `;
        return { ...review, user: user[0] };
      }),
    );

    return reviewsWithUser;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch reviews.');
  }
}

export async function getUserById(id: string) {
  try {
    const data = await sql`
      SELECT * FROM "User"
      WHERE id = ${id}
    `;

    return data[0];
  }
  catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function getUsers() {
  try {
    const data = await sql`
      SELECT * FROM User
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch User.');
  }
}

export async function getProductsByCategory(category: string) {
  try {
    const data = await sql`
      SELECT * FROM product
      WHERE category = ${category}
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products by category.');
  }
}


export async function createReview(
  productId: string,
  userId: string,
  rating: number,
  content: string,
) {
  try {
    const data = await sql`
      INSERT INTO review (product_id, user_id, rating, content)
      VALUES (${productId}, ${userId}, ${rating}, ${content})
      RETURNING *
    `;

    return data[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create review.');
  }
}

