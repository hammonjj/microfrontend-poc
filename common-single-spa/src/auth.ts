import { BehaviorSubject } from "rxjs";

interface AuthState {
  sessionToken: string | null;
  error: boolean | string;
  pending: boolean;
  userId?: string | null;
  username?: string | null;
}

export const auth$ = new BehaviorSubject<AuthState>({
  sessionToken: localStorage.getItem("sessionToken"),
  error: false,
  pending: false,
  userId: null,
  username: null,
});

const GET_LOGGED_IN = (username: string, password: string): Promise<AuthState> =>
  new Promise((resolve, reject) => {
    auth$.next({
      sessionToken: null,
      error: false,
      pending: true,
    });
    setTimeout(() => {
      console.log("Checking credentials...")
      if (username === "crafteduser" && password === "craftedpassword") {
        console.log("Logged in!")
        const sessionToken = "abc123def456";
        localStorage.setItem("sessionToken", sessionToken);
        resolve({
          sessionToken,
          error: false,
          pending: false,
          userId: "123",
          username: "crafteduser",
        });
      } else {
        console.log("Invalid user or password")
        resolve({
          sessionToken: null,
          error: "Invalid user or password",
          pending: false,
          userId: null,
          username: null,
        });
      }
    }, 1500);
  });

export function login(username: string, password: string): void {
  console.log("Logging in...")  
  if (!auth$.value.pending) {
    console.log("Not pending")
    GET_LOGGED_IN(username, password).then((user) => {
      auth$.next(user);
    });
  }
}

export function logout(): void {
  localStorage.removeItem("sessionToken");
  auth$.next({
    sessionToken: null,
    error: false,
    pending: false,
    userId: null,
    username: null,
  });
}
