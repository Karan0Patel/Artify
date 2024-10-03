import axios from "axios";

export const login = async (formData) => {
    try {
        const response = await axios.post("http://localhost:8000/api/auth/validate-user", formData);
        const data = await response.json();
        return data.data; 
    } catch (error) {
        console.error("Error fetching subscriptions:", error);
        return ;
    }
};
