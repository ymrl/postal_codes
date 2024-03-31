import React from "react";

type UIContextType = {
  isHelpDialogOpen: boolean;
};

type UIActionType = { type: "OPEN_HELP_DIALOG" | "CLOSE_HELP_DIALOG" };

const initialState: UIContextType = {
  isHelpDialogOpen: false,
};

const UIReducer = (
  state: UIContextType,
  action: UIActionType,
): UIContextType => {
  switch (action.type) {
    case "OPEN_HELP_DIALOG":
      return {
        ...state,
        isHelpDialogOpen: true,
      };
    case "CLOSE_HELP_DIALOG":
      return {
        ...state,
        isHelpDialogOpen: false,
      };
    default:
      return state;
  }
};
export const UIContext = React.createContext<
  UIContextType & { dispatch: (action: UIActionType) => void }
>({
  ...initialState,
  dispatch: () => {},
});

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(UIReducer, initialState);
  return (
    <UIContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};
