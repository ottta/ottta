export default function Page(props: any) {
    return (
        <div>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
    );
}
