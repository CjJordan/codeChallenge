const exec = require('child_process').exec;

module.exports = function(script, test) {
  return new Promise((resolve, reject) => {
    exec(`sudo docker run --rm codewars/node-runner run -l javascript -c "${script.replace(/"/g, '\\"')}" -t cw -f "${test}"`,
      (err, stdOut, stdErr) => {
        if (err) reject(err);

        if (stdErr && !stdOut) {
          stdErr = stdErr.replace(/\n/g, '\\n')
            .replace(/\s/g, '\\s');
          reject(stdErr);
        } else {
          if (stdOut.search(/<ERROR::>/) > -1) {
            stdOut = stdOut.replace(/<:LF:>/g, '\\n')
             .replace(/\s/g, '\\s');
            reject(stdOut);
          } else {
            let output = stdOut.split(/\n/g);
            for (let i = output.length - 1; i >= 0; i--) if (output[i] === '') output.splice(i, 1);
            resolve(output);
          }

        }

      }
    );
  });
}
