import { createContext, useState } from "react";

type MyComponentChildren = React.PropsWithChildren;

export type BarberModel = {
  barberId: string;
  barberName: string;
  barberImage: string;
};

type UserType = {
  id: string;
  name: string;
  password: string;
  email: string;
  favoritesBarbers: BarberModel[];
  cep: string;
  avatar: string;
};

type UsersModel = {
  users: UserType[];
  isAdded: boolean;
  createUser: (user: UserType) => void;
  handleFavoriteBarber: (
    data: BarberModel,
    idUserLogged: string | number[]
  ) => string;
  toggleIsAdded: () => void;
  updateChanges: (
    newName: string,
    newCep: string,
    newImage: string,
    idUserLogged: string | number[]
  ) => void;
};

const UserContext = createContext<UsersModel>({} as UsersModel);

function UserProvider({ children }: MyComponentChildren) {
  const [users, setUsers] = useState<UserType[]>([]);

  const [isAdded, setIsAdded] = useState(false);

  function createUser(user: UserType) {
    setUsers([...users, user]);
  }

  function handleFavoriteBarber(
    data: BarberModel,
    idUserLogged: string | number[]
  ): string {
    const userLogged = users.find((user) => user.id === idUserLogged);

    if (
      userLogged?.favoritesBarbers?.findIndex(
        (barber) => barber.barberId === data.barberId
      ) === -1
    ) {
      const newInstance = users.find((user) => user.id === idUserLogged);
      newInstance?.favoritesBarbers?.push(data);
      setUsers([newInstance as UserType]);
      return "added";
    } else {
      const newInstance = users;

      const index = users.findIndex((user) => user.id === idUserLogged);
      newInstance[index].favoritesBarbers = users[
        index
      ].favoritesBarbers?.filter((item) => item.barberId !== data.barberId);

      setUsers([...newInstance]);
      return "removed";
    }
  }

  function toggleIsAdded() {
    setIsAdded(!isAdded);
  }

  function updateChanges(
    newName: string,
    newCep: string,
    newImage: string,
    idUserLogged: string | number[]
  ) {
    const newInstance = users;

    const index = newInstance.findIndex((user) => user.id === idUserLogged);
    newInstance[index].name = newName;
    newInstance[index].cep = newCep;
    newInstance[index].avatar = newImage;

    setUsers([...newInstance]);
  }

  return (
    <UserContext.Provider
      value={{
        users,
        isAdded,
        createUser,
        handleFavoriteBarber,
        toggleIsAdded,
        updateChanges,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
