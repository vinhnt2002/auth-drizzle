

# SETUP drizzle 
   - npm i drizzle-orm @neondatabase/serverless
   - npm install drizzle-orm @auth/drizzle-adapter
   - npm i -D pg
   - npm i -D drizzle-kit
            ->  pagekage.json
                +    "db:stuidio": "npx drizzle-kit studio",
                +    "db:push": "npx drizzle-kit push:pg"