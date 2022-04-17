import { render , screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component',()=>{
    test('renders Hello World as a text',()=>{
    render(<Greeting /> );

    const helloWorldElement = screen.getByText('Hello World',{ exact: false});
    expect(helloWorldElement).toBeInTheDocument();
    })


    test('renders good to see you as a text(Button not clicked)',()=>{
    render(<Greeting /> );
    const good = screen.getByText('good to see you',{ exact: false});
    expect(good).toBeInTheDocument();
    })

    test('Render  changed ( Button clicked )',()=>{
        render(<Greeting />)
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const output = screen.getByText('Changed!');
        expect(output).toBeInTheDocument();
    })
    
    test('Render  changed ( Button clicked )',()=>{
        render(<Greeting />)
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const output = screen.queryByText('good to see you',{ exact: false});
        expect(output).toBeNull()  //.not.toBeInTheDocument(); also use
    })
})

