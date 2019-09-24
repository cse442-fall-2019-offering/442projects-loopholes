# UBulletin Backend

## Quickstart
### Step 1: Install Node.js
The UBulletin backend is essentially a TypeScript/Node.js/Express application. In order to run it, you must first install [Node.js](https://nodejs.org/en/download/).

### Step 2: Create a backend/.env file with credentials
Since our backend will be interacting with a Firebase database and Firebase storage, we need to inject Firebase credentials upon runtime of our backend. The way this works is that we store all Firebase credentials in a `backend/.env` file (this is ignored by `.gitignore`) and these credentials are injected as environment variables upon runtime.

First, create a `backend/.env` file:
```bash
$ touch backend/.env
```

Then, within this `backend/.env` file, add the following, with your own Firebase credentials:
```
FIREBASE_API_KEY=SomeFirebaseApiKey
FIREBASE_AUTH_DOMAIN=firebase-auth-domain.firebaseapp.com
FIREBASE_DATABASE_URL=https://firebase-database-url.firebaseio.com
FIREBASE_PROJECT_ID=firebase-project-id
FIREBASE_STORAGE_BUCKET=firebase-storage-bucket.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789101
```

### Step 3: Install package dependencies and run program
First, make sure you are in the `backend/` directory:
```bash
$ cd backend
```


Then, install all of the package dependencies (these are listed within `package.json`):
```bash
$ npm install
```

Finally, compile the TypeScript code into JavaScript and spin up the server:
```bash
$ npm build && npm start
```

### Step 4: Send POST request to /firebaseTestEndpoint
At the time of writing this README, we have one test endpoint `firebaseTestEndpoint` which takes incoming JSON body requests and stores them in our Firebase real-time database.

Simply send a POST request (installing [Postman](https://www.getpostman.com) is recommended) to `/firebaseTestEndpoint`, preferable with this as the body:
```
{
    "comments": {
        "0": {
            "comment_text": "Hello",
            "commenter_buffalo_id": "mhertz"
        }
    },
    "image_link": "https://i.imgur.com/Nqo4swk.jpg",
    "post_id": 2,
    "tags": {
        "art": true
    },
    "timestamp": {
        "day": 22,
        "hour": 21,
        "minute": 21,
        "month": 9,
        "seconds": 4,
        "year": 2019
    },
    "uploader_buffalo_id": "hansbas",
    "uploader_is_anonymous": false,
    "upvotes": {
        "downvoter_buffalo_ids": {
            "hansbas": true
        },
        "num_downvotes": 1,
        "num_upvotes": 1,
        "upvoter_buffalo_ids": {
            "matthewhz": true
        }
    }
}
```

### Step 5: Check that the data you sent was stored in Firebase
Check the [Firebase Console](https://console.firebase.google.com/u/1/project/ubulletin-eb497/database) to see if the data you sent was stored in the Real-Time database.

*Note: if you have not been added to the Firebase project, you may not be able to see the database.*