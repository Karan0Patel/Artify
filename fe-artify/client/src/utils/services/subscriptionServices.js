
export const getSubscriptions = async () => {
    try {
        const response = await fetch('http://localhost:8000/subscriptions');
        const data = await response.json();
        return data.data; 
    } catch (error) {
        console.error("Error fetching subscriptions:", error);
        return [];
    }
};
