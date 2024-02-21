import React, { createContext, useState } from "react";

export const LikeContext = createContext();
export const UnlikeContext = createContext();
export const UserLiked = createContext();

export const LikedProvider = ({ children }) => {
  const [liked, setIsLiked] = useState(false);

  return (
    <UserLiked.Provider value={{ liked, setIsLiked }}>
      {children}
    </UserLiked.Provider>
  );
};

export const LikeProvider = ({ children }) => {
  const [like, setLike] = useState({});
  console.log(like);
  return (
    <LikeContext.Provider value={{ like, setLike }}>
      {children}
    </LikeContext.Provider>
  );
};

export const UnlikeProvider = ({ children }) => {
  const [unLike, setUnlike] = useState({});

  return (
    <UnlikeContext.Provider value={(unLike, setUnlike)}>
      {children}
    </UnlikeContext.Provider>
  );
};
