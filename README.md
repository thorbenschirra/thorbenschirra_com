### **_This is my personal portfolio website_**

Nothing fancy just a sleek and plain website that I wanted to build for myself to up my design skills.

Feel free to use the design if you want to. Just fork it and you're good to go.

**_Follow these steps to create your own website:_**

1. go to supabase and create an account
2. create a project and create a table called "users" with the following schema:
   - id uuid unique (usually by default)
   - header text NOT nullable
   - keyword text[] NOT nullable
   - description text NOT nullable
   - content text NOT nullable
3. fork this repository and insert the environment variables SUPABASE_ANON_KEY, SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY
4. deploy it (I recommend Vercel)

**_Future features are:_**

- a blog (already present but not finished)
- a resume viewer (maybe in a pdf format, let's see...)

# **Just in case you wonder...**

Sometimes I had to commit unncessary stuff because my local environment sometimes does not display the content appropriately.
