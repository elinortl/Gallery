import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import { imageService } from '../../services/ImagesService';
import Gallery from "./Gallery";
import images from "../../mock";

jest.mock("axios");

describe('Gallery Component', () => {
    test('render Gallery page', () => {
        render(<Gallery />);
        const buttonElement = screen.getByTestId("refresh-button");
        expect(buttonElement).toBeInTheDocument();
    });

    it("should return images list", async () => {
        axios.get.mockResolvedValueOnce(images);
        const result = await imageService.getImages();
        expect(result).toEqual(images);
        expect(result.length).toBeLessThanOrEqual(5);
    });

    it('calls "onClick" prop on button click', () => {
        const onClick = jest.fn();
        const { getByText } = render(<button data-testid="refresh-button" onClick={onClick}>Refresh</button>);

        fireEvent.click(getByText(/Refresh/i));
        expect(onClick).toHaveBeenCalled();
    });

})

