
import * as core from '@actions/core'
import * as yaml from 'js-yaml'
import * as fs from 'fs'
import * as assert from 'assert'

const rawActualConfig = fs.readFileSync(process.argv[2], 'utf8')
core.startGroup('Actual generated user config')
core.info(rawActualConfig)
core.endGroup()

const actualConfig = yaml.load(rawActualConfig)

const rawExpectedConfig = process.argv[3]
core.startGroup('Expected generated user config')
core.info(rawExpectedConfig)
core.endGroup()

const expectedConfig = rawExpectedConfig ? JSON.parse(rawExpectedConfig) : undefined;

assert.deepStrictEqual(
  actualConfig,
  expectedConfig,
  'Expected configuration does not match actual configuration'
);
