export const EXECUTION_MODES = [
  { value: '', label: 'Runtime', descriptionKey: 'execution.runtime', encodeBase64: false },
  { value: 'SE-', label: 'SE- ScriptEngine', descriptionKey: 'execution.se', encodeBase64: true },
  { value: 'TS-', label: 'TS- Thread.sleep', descriptionKey: 'execution.ts', encodeBase64: false },
  { value: 'WF-', label: 'WF- Write File', descriptionKey: 'execution.wf', encodeBase64: false },
  { value: 'PB-lin-', label: 'PB-lin- ProcessBuilder', descriptionKey: 'execution.pbLin', encodeBase64: true },
  { value: 'PB-win-', label: 'PB-win- ProcessBuilder', descriptionKey: 'execution.pbWin', encodeBase64: true },
  { value: 'RC-', label: 'RC- URLClassLoader', descriptionKey: 'execution.rc', encodeBase64: false },
  { value: 'DL-', label: 'DL- DNSLog', descriptionKey: 'execution.dl', encodeBase64: false },
  { value: 'HL-', label: 'HL- HTTPLog', descriptionKey: 'execution.hl', encodeBase64: false },
  { value: 'JD-', label: 'JD- JNDI', descriptionKey: 'execution.jd', encodeBase64: false },
  { value: 'BC-', label: 'BC- BCEL', descriptionKey: 'execution.bcel', encodeBase64: false }
]

export function getExecutionMode(value) {
  return EXECUTION_MODES.find(mode => mode.value === value) || EXECUTION_MODES[0]
}

export function encodeBase64Utf8(value) {
  const bytes = new TextEncoder().encode(value)
  let binary = ''
  for (let offset = 0; offset < bytes.length; offset += 32768) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 32768))
  }
  return btoa(binary)
}

export function buildExecutionCommand(command, modeValue) {
  const mode = getExecutionMode(modeValue)
  const body = mode.encodeBase64 ? encodeBase64Utf8(command) : command
  return mode.value + body
}
