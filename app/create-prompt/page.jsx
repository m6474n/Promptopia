'use client';
import Form from '@/components/Form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreatePrompt = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: "",
        tag: ""
    });

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const res = await fetch('/api/prompts/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag
                })
            });

            if (res.ok) {
                router.push('/');
            } else {
                // Handle errors here
                console.error('Failed to create prompt');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            <Form 
                type='Create'
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={createPrompt} 
            />
        </div>
    );
};

export default CreatePrompt;
