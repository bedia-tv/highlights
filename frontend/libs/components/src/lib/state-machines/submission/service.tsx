import {submissionMachine} from './machine';
import  {interpret} from 'xstate';

const submissionService = interpret(submissionMachine);

submissionService.start()

export {
    submissionService
}