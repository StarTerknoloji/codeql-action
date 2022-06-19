
import core from '@actions/core'
import * as yaml from 'js-yaml'
import * as fs from 'fs'
import * as assert from 'assert'

const rawActualConfig = fs.readFileSync(process.argv[2], 'utf8')
const actualConfig = yaml.load(rawActualConfig)
const expectedConfig = JSON.parse(core.getInput('expected-config-file-contents'));

assert.deepStrictEqual(
  actualConfig,
  expectedConfig,
  'Expected configuration does not match actual configuration'
);
