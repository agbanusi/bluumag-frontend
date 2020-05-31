import React from 'react';

function Group(props) {
    return (
        <div>testing</div>
    )
}

export default Group;

export async function getStaticPaths() {
    const paths = []
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    return {
        props: {}
    }
}