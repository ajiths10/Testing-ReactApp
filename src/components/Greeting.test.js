import { render , screen} from '@testing-library/react'
import Greeting from './Greeting';

describe('Greeting component',()=>{
    test('renders Hello World as a text',()=>{
    render(<Greeting /> );

    const helloWorldElement = screen.getByText('Hello World',{ exact: false});
    expect(helloWorldElement).toBeInTheDocument();
    })

    
    test('renders good to see you as a text',()=>{
    render(<Greeting /> );
    const good = screen.getByText('good to see you',{ exact: false});
    expect(good).toBeInTheDocument();
    })

    
})

