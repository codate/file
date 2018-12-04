import express from 'express'
import {Responder} from '@codate/commons'
import RemoveFile from '../business/usecase/RemoveFile.mjs'

const router = express.Router()
router.delete('/files/:filename', (req, res, next) => {
    const responder = new Responder(req, res, next)
    const removeFile = new RemoveFile()
    removeFile.execute(req.params.filename, responder)
})

export default router
