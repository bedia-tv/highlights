import { createMachine } from 'xstate';

type SubmissionEvent =
    | { type: "SUBMIT"; }
    | { type: "RESET"; }
    | { type: "RESOLVE"; }
    | { type: "REJECT"; }

type SubmissionState =
    | { value: 'idle'; context: null }
    | { value: 'loading'; context: null }
    | { value: 'success'; context: null }
    | { value: 'failure'; context: null }

export const submissionMachine = createMachine<{}, SubmissionEvent, SubmissionState>({
    id: "submission",
    initial: 'idle',
    states: {
        idle: {
            on: {
                SUBMIT: 'loading'
            }
        },
        loading: {
            on: {
                REJECT: 'failure',
                RESOLVE: 'success'
            }
        },
        success: {
            on: {
                RESET: 'idle'
            }
        },
        failure: {
            on: {
                RESET: 'idle'
            }
        }
    }
})