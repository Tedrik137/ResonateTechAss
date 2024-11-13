import User from "@/entities/User";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<User>("/users");

const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: apiClient.getAll,
  });

export default useUsers;
