import React, { createContext, useReducer } from "react";

// initial state is an empty array, and two functions to add and remove items from the cart
export const CartContext = createContext({
  cartItems: [],
  addToCart: (item) => {},
  removeFromCart: (id) => {},
  clear: () => {},
  updateItemQuantity: (item) => {},
});

export const cartReducer = (state, action) => {
  switch (action.type) {

    case "INITIALIZE_CART":
      return {
        cartItems: action.payload,
      };

      case "ADD_TO_CART":
        const newItem = action.payload;
        const existingItemIndex = state.cartItems.findIndex(item => item.medicine_id === newItem.medicine_id);
      
        if (existingItemIndex !== -1) {
          // If the item already exists in the cart, update its quantity
          const updatedCartItems = state.cartItems.map((item, index) => {
            if (index === existingItemIndex) {
              return {
                ...item,
                quantity: item.quantity + 1
              };
            } else {
              return item;
            }
          });
          localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
          return {
            cartItems: updatedCartItems
          };
        } else {
          // If the item doesn't exist in the cart, add it with a quantity of 1
          const itemToAdd = { ...newItem, quantity: 1 };
          const updatedCartItems = [...state.cartItems, itemToAdd];
          localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
          return {
            cartItems: updatedCartItems
          };
        
      }

      case "REMOVE_FROM_CART":
        const itemIdToRemove = action.payload;
        const updatedCartItemsAfterRemove = state.cartItems.filter(
          (item) => item.medicine_id !== itemIdToRemove 
        );
        localStorage.setItem(
          "cartItems",
          JSON.stringify(updatedCartItemsAfterRemove)
        );
        return {
          cartItems: updatedCartItemsAfterRemove,
        };

    case "CLEAR_CART":
      return {
        cartItems: [],
      };

      case "UPDATE_ITEM_QUANTITY":
        const { id, quantity } = action.payload;
        const updatedCartItems = state.cartItems.map((item) => {
          if (item.medicine_id === id) {
            return {
              ...item,
              quantity: quantity,
            };
          }
          return item;
        });
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        return {
          cartItems:updatedCartItems 
        }  
      };
    };

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
  });

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const clear = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const updateItemQuantity = (item) => {
    dispatch({ type: "UPDATE_ITEM_QUANTITY", payload: item });
  };


  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartItems: state.cartItems,
        clear,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
