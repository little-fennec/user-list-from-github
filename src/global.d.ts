


type ErrorType = string|null;

type actionType  =
    { type: "FETCH_ITEMS_SUCCESS"; payload: any }
    | { type: "FETCH_ITEMS_REQUEST" }
    | { type: "FETCH_ITEMS_FAILURE"; payload: ErrorType }

