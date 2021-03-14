module.exports = function reverse (n) {
    if (n<0) {
        n = -n
    }
    n = n+''
    m = []
    for (i=0;i<=n.length;i++) {
        m.unshift(n[i])
    }
    if (m[0] == 0) {
        m.shift()
    }
    return Number(m.join(''))
}
