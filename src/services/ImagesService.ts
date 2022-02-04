import axios from 'axios';
import { ImagesContent, Response} from '../Model/Interfaces';
const BASE_PATH = 'https://api.jonathanczyzyk.com/api/v1/images/small';

class ImageService {
    getImages(): Promise<Response> {
        return axios.get<ImagesContent[]>(BASE_PATH, {
            headers: {
                'x-api-key': 'api-key-f1b28d83-2c51-4fe8-9a31-aa21268be30c'
            }
        });
    }
}

export const imageService = new ImageService();