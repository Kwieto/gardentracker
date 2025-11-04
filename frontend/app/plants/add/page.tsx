import Form from 'next/form';

export default function Page() {
    return (
        <Form action="/plants">
            <input name="name"></input>
            <input name="variety"></input>
            <input name="plantingDate" type="date"></input>
            <button type="submit">Submit</button>
        </Form>
    )
}