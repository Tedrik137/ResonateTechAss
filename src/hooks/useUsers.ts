import User from "@/entities/User";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<User>("/users");

const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: apiClient.getAll,
    staleTime: ms("1h"),
  });

export default useUsers;
