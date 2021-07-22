'use strict';

const Job = require('./rdhd-job-base_job');

class LinuxJob
{
    static get os() { return "LINUX"; }

    static do(asset, code, task, sync = false, whatIf = false, wsServer = 'http://127.0.0.1:3001')
    {  
        Job.do(asset, code, task, sync, whatIf, wsServer);
    }
    // ******************************

    static killAll(asset, code, binary, sync = false, whatIf = false, wsServer = 'http://127.0.0.1:3001')
    {
        let task = "sudo killall -9 " + binary;

        LinuxJob.do(asset, code, task, sync, whatIf, wsServer);
    }
    // ******************************

    static isAlive(asset, code, sync = false, whatIf = false, wsServer = 'http://127.0.0.1:3001')
    {
        let task = "hostname";

        LinuxJob.do(asset, code, task, sync, whatIf, wsServer);
    }
    // ******************************
}

module.exports = LinuxJob