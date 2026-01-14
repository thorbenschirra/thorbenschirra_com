# **This is my personal portfolio website**

Nothing fancy just a sleek and plain website that I wanted to build for myself to up my design skills.

Feel free to use the design if you want to. Just fork it and you're good to go.

## **Follow these steps to create your own website:**

1. go to **supabase** and **create an account**

2. **create a project** and **create a table called "users"** with the following schema:

   - id uuid gen_random_uuid() (present by default)
   - header text NOT nullable
   - keywords text[] NOT nullable
   - description text NOT nullable
   - content text NOT nullable
   - created_at timestamptz now() (present by default)

3. fork this repository and insert the environment variables SUPABASE_ANON_KEY, SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY

4.create a google analytics account, create a data stream and copy the Google Analytics ID "G-XYZ" to your environment file

5. exchange the resume file with your and make sure to either change the name in the <Link> tag or name your file "resume.pdf"

6. make changes to your website as you like

7. deploy it (I recommend Vercel and don't forget to add environment variables into your project)

### **Just in case you wonder...**

Sometimes I had to commit unncessary stuff because my local environment sometimes does not display the content appropriately, so sorry for that...
