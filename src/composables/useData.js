import axios from "axios";
import {ref} from "vue";

export const useData = () => {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null)
    
    const getData = async (URL) => {
        try {
            const res = await axios.get(URL);
            data.value = res.data;
        } catch (e) {
            console.error(e);
            error.value = e;
        } finally {
            loading.value = false;
        }
    }

    return {
        getData,
        data,
        loading,
        error
    }
}