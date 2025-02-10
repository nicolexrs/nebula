import React from "react";
import { signInWithPopup, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

const SocialSignIn = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  const handleAppleSignIn = async () => {
    const provider = new OAuthProvider("apple.com");
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Apple sign-in error:", error);
    }
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={handleGoogleSignIn}
        className="flex w-full items-center justify-center gap-2.5 rounded-lg p-3.5 bg-gradient-to-r from-primary/60 to-secondary/60 hover:from-primary hover:to-secondary text-white"
      >
        Sign In
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_709_8846)">
            <path
              d="M22.5001 11.2438C22.5134 10.4876 22.4338 9.73256 22.2629 8.995H11.7246V13.0771H17.9105C17.7933 13.7929 17.5296 14.478 17.1352 15.0914C16.7409 15.7047 16.224 16.2335 15.6158 16.646L15.5942 16.7827L18.9264 19.3124L19.1571 19.335C21.2772 17.4161 22.4997 14.5926 22.4997 11.2438"
              fill="#4285F4"
            />
          </g>
        </svg>
      </button>

      <button
        onClick={handleAppleSignIn}
        className="flex w-full items-center justify-center gap-2.5 rounded-lg p-3.5 bg-gradient-to-r from-primary/60 to-secondary/60 hover:from-primary hover:to-secondary text-white"
      >
        Sign In
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1641 1.83398C14.0293 1.83398 12.7109 2.58398 11.8945 3.48242C11.1172 4.38086 10.4961 5.58398 10.7344 6.78711C11.9844 6.78711 13.2031 6.07227 13.9844 5.20117C14.793 4.3291 15.4688 3.13086 15.1641 1.83398ZM18.7734 7.50195C17.5312 7.44336 16.3516 8.21484 15.5859 8.21484C14.7617 8.21484 13.6602 7.52539 12.5429 7.52539C10.4883 7.52539 8.26562 9.12695 8.26562 12.4023C8.26562 14.3086 9.00391 16.3691 9.85156 17.8887C10.6211 19.2148 11.417 20.6094 12.667 20.6094C13.7539 20.6094 14.2031 19.8398 15.5273 19.8398C16.8945 19.8398 17.2148 20.6094 18.3867 20.6094C19.6367 20.6094 20.5 19.2695 21.1602 18C19.1406 17.1523 18.7734 14.7383 18.7734 12.9434C18.7734 10.9199 20.0625 9.78516 21.002 9.12695C20.0898 7.83398 18.9863 7.50195 18.7734 7.50195Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default SocialSignIn;
