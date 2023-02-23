import {render,screen } from "@testing-library/react";
import { GifItem } from "../../src/components";


describe('Prueba en <GifItem />', () => { 
    const title = 'Goku'
    const url = 'https://dragon-ball.com/goku.jpg'

    test('Debe hacer match con snapshot',()=>{
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el URL y ALT indicado',() => {
        render(<GifItem title={title} url={url}/>);
        // screen.debug();
        // expect(screen.getAllByRole('img').src).toBe(url);
        // expect(screen.getAllByRole('img').alt).toBe(title);

        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url )
        expect( alt ).toBe( title );
    })

    test('debe mostrar el titulo del componente', () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText( title )).toBeTruthy();
    })
 });