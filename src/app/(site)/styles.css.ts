import { style } from '@vanilla-extract/css';

export default {
    container: style({
        minHeight: 'calc(100vh - 5rem)', // subtract the height of the header + a little extra
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }),
    heading: style({
        fontSize: '2rem'
    })
};
