import type { Metadata } from 'next';
import styles from './styles.css';

export const metadata: Metadata = {
    title: 'Home page',
    description: 'Page description',
    keywords: ['page', 'keywords']
};

// todo: make this nicer one day
// eslint-disable-next-line functional/functional-parameters
export default function Page() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>next js + payload cms template</h1>
        </div>
    );
}
