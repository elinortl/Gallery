import { render, screen } from "@testing-library/react";
import ImagesGrid from "./ImagesGrid";
import images from "../../mock";

describe('ImagesGrid Component', () => {
    test('render ImagesGrid class "container" if the rowDisplay prop is true', () => {
        const { container } = render(<ImagesGrid displayImages={images} rowDisplay={true} />);
        const element = screen.getAllByRole("img");
        expect(element.length).toEqual(5);
        expect(container.firstChild.classList.contains('container')).toBe(true);
    });

    test('render ImagesGrid class "colContainer" if the rowDisplay prop is false', () => {
        const { container } = render(<ImagesGrid displayImages={images} rowDisplay={false} />);
        expect(container.firstChild.classList.contains('colContainer')).toBe(true);
    });
})

