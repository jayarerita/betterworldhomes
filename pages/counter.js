import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'
import { useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../slices/counter/counterSlice'

export default function CounterPage({}){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <Layout >
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div>
                <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
                >
                Increment
                </button>
                <span>{count}</span>
                <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                >
                Decrement
                </button>
            </div>
        </Layout>
    )
}