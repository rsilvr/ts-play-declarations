// https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types

import {NumberFormatter} from 'foreigner-module'
import axios from 'axios'
import {writeFile, readFile} from 'fs'
import {promisify} from 'util'

const formatter = new NumberFormatter()
console.log(formatter.formatNumber(2.123))