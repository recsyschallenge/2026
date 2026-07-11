(function () {
    'use strict';

    var results = [
        {team: 'hallucinated', track: 'academic', composite: 0.688949595, ndcg: 0.618486308, catalog: 0.027490387, lexical: 0.957074025, judge: 4.75, underReview: true},
        {team: 'volart', track: 'industry', composite: 0.586611845, ndcg: 0.396534887, catalog: 0.03161182, lexical: 0.926832194, judge: 4.9, code: 'https://github.com/artvolgin/music-crs-recsys2026'},
        {team: 'niwatori', track: 'industry', composite: 0.585920046, ndcg: 0.493389952, catalog: 0.03118693, lexical: 0.77356377, judge: 4.45, code: 'https://github.com/ryowk/recsys2026-niwatori'},
        {team: 'swyoo', track: 'industry', composite: 0.578429003, ndcg: 0.382893624, catalog: 0.030273417, lexical: 0.952048495, judge: 4.85, code: 'https://github.com/yoobros/music-crs-challenge'},
        {team: 'team2_s2', track: 'academic', composite: 0.575916042, ndcg: 0.445184942, catalog: 0.030252172, lexical: 0.765483535, judge: 4.65, code: 'https://github.com/lopsandrea/music-crs-team2'},
        {team: 'dslvt', track: '', composite: 0.562228273, ndcg: 0.457959398, catalog: 0.028510123, lexical: 0.791475615, judge: 4.35},
        {team: 'theoviel', track: 'industry', composite: 0.559378427, ndcg: 0.480050019, catalog: 0.028382656, lexical: 0.915151515, judge: 4},
        {team: 'yangbai', track: 'academic', composite: 0.555093031, ndcg: 0.498649123, catalog: 0.030379639, lexical: 0.739805053, judge: 4.05},
        {team: 'madhav', track: 'academic', composite: 0.547547624, ndcg: 0.430360696, catalog: 0.031356886, lexical: 0.81731587, judge: 4.3},
        {team: 'dhl2233', track: 'industry', composite: 0.542871747, ndcg: 0.386507777, catalog: 0.023772599, lexical: 0.809905985, judge: 4.55},
        {team: 'soussou', track: 'academic', composite: 0.53026423, ndcg: 0.427746435, catalog: 0.030528351, lexical: 0.770881774, judge: 4.15},
        {team: 'sanjeevsuresh', track: 'industry', composite: 0.52754643, ndcg: 0.439683248, catalog: 0.031569331, lexical: 0.832978723, judge: 3.95},
        {team: 'vkost', track: 'industry', composite: 0.509828707, ndcg: 0.472930522, catalog: 0.03142062, lexical: 0.752213841, judge: 3.6},
        {team: 'shipshipzz', track: '', composite: 0.508669845, ndcg: 0.456929936, catalog: 0.025132247, lexical: 0.826916525, judge: 3.6},
        {team: 'uec_okmt_lab', track: 'academic', composite: 0.500894001, ndcg: 0.407194835, catalog: 0.02948737, lexical: 0.768478465, judge: 3.9},
        {team: 'komekami', track: 'industry', composite: 0.499798688, ndcg: 0.352800194, catalog: 0.027532876, lexical: 0.731453029, judge: 4.3},
        {team: 'suryaaseran', track: 'industry', composite: 0.492055909, ndcg: 0.336189038, catalog: 0.028786302, lexical: 0.773327591, judge: 4.25},
        {team: 'vasiliq', track: 'industry', composite: 0.48487004, ndcg: 0.380811524, catalog: 0.028340167, lexical: 0.853802609, judge: 3.75},
        {team: 'cyang31', track: 'industry', composite: 0.47815866, ndcg: 0.400044323, catalog: 0.028616346, lexical: 0.84024864, judge: 3.55},
        {team: 'simransu', track: 'industry', composite: 0.477485882, ndcg: 0.329550639, catalog: 0.03142062, lexical: 0.733185008, judge: 4.15},
        {team: 'bhavikat', track: 'industry', composite: 0.473612726, ndcg: 0.22711377, catalog: 0.031293153, lexical: 0.869265264, judge: 4.6},
        {team: 'lamya19', track: 'academic', composite: 0.465729767, ndcg: 0.219322287, catalog: 0.031293153, lexical: 0.791893083, judge: 4.65},
        {team: 'uiskloster', track: 'academic', composite: 0.455721947, ndcg: 0.349941799, catalog: 0.031654309, lexical: 0.938356164, judge: 3.45},
        {team: 'maxime_m', track: 'academic', composite: 0.450957545, ndcg: 0.358706418, catalog: 0.031378131, lexical: 0.809665227, judge: 3.5},
        {team: 'this_adityarai', track: 'academic', composite: 0.448230477, ndcg: 0.321132005, catalog: 0.011599499, lexical: 0.840045249, judge: 3.7},
        {team: 'eooom', track: 'academic', composite: 0.442905197, ndcg: 0.118705012, catalog: 0.031718043, lexical: 0.878808864, judge: 4.9},
        {team: 'jseals38', track: 'industry', composite: 0.438173052, ndcg: 0.474450033, catalog: 0.029041236, lexical: 0.780439122, judge: 2.6},
        {team: 'kaish', track: 'industry', composite: 0.396643735, ndcg: 0.240070694, catalog: 0.030698307, lexical: 0.747885572, judge: 3.65},
        {team: 'npatta01', track: 'industry', composite: 0.381109682, ndcg: 0.253684925, catalog: 0.031484353, lexical: 0.786187845, judge: 3.3},
        {team: 'maxduan', track: '', composite: 0.372605487, ndcg: 0.348407399, catalog: 0.031101952, lexical: 0.677915927, judge: 2.7},
        {team: 'tanlocn', track: 'industry', composite: 0.361906828, ndcg: 0.332300917, catalog: 0.031696799, lexical: 0.83836689, judge: 2.45},
        {team: 'thylinao', track: 'academic', composite: 0.35969035, ndcg: 0.267640069, catalog: 0.028977502, lexical: 0.692225646, judge: 3.05},
        {team: 'swlee9087', track: 'academic', composite: 0.354160393, ndcg: 0.139512161, catalog: 0.030549595, lexical: 0.713493531, judge: 3.8},
        {team: 'minhee', track: 'academic', composite: 0.335700789, ndcg: 0.150254742, catalog: 0.031208175, lexical: 0.812026002, judge: 3.35},
        {team: 'kszydlowski', track: 'industry', composite: 0.324967828, ndcg: 0.04375, catalog: 0.029933505, lexical: 0.600994773, judge: 4.2},
        {team: 'semintelligencn', track: 'academic', composite: 0.321272714, ndcg: 0.232288079, catalog: 0.030634573, lexical: 0.820652174, judge: 2.6},
        {team: 'yifeinatchen', track: 'industry', composite: 0.307375308, ndcg: 0.153364286, catalog: 0.031569331, lexical: 0.775362319, judge: 3},
        {team: 'shuaih', track: 'academic', composite: 0.251473477, ndcg: 0.303488126, catalog: 0.031335642, lexical: 0.628458498, judge: 1.45},
        {team: 'dillipriya', track: 'academic', composite: 0.177310474, ndcg: 0.009937786, catalog: 0.020076055, lexical: 0.653339756, judge: 2.4},
        {team: 'jinbao', track: 'industry', composite: 0.157168019, ndcg: 0.134071026, catalog: 0.019502454, lexical: 0.506822612, judge: 1.5}
    ];

    var body = document.getElementById('final-leaderboard-body');
    var summary = document.getElementById('leaderboard-summary');
    var tabs = document.querySelectorAll('[data-results-track]');

    if (!body || !summary || !tabs.length) {
        return;
    }

    function metricCell(value, isComposite) {
        var cell = document.createElement('td');
        cell.className = 'numeric-column';
        if (isComposite) {
            cell.className += ' composite-score';
        }
        cell.textContent = Number(value).toFixed(4);
        return cell;
    }

    function trackCell(track) {
        var cell = document.createElement('td');
        var badge = document.createElement('span');
        var label = track ? track.charAt(0).toUpperCase() + track.slice(1) : 'Not specified';
        badge.className = 'track-badge track-' + (track || 'unspecified');
        badge.textContent = label;
        cell.appendChild(badge);
        return cell;
    }

    function codeCell(result) {
        var cell = document.createElement('td');
        cell.className = 'code-column';

        if (!result.code) {
            cell.textContent = '-';
            return cell;
        }

        var link = document.createElement('a');
        link.className = 'code-link';
        link.href = result.code;
        link.target = '_blank';
        link.rel = 'noopener';
        link.textContent = 'GitHub';
        link.setAttribute('aria-label', 'Code for ' + result.team + ' (opens in a new tab)');
        cell.appendChild(link);
        return cell;
    }

    function renderLeaderboard(track) {
        var filteredResults = results.filter(function (result) {
            return track === 'all' || result.track === track;
        });

        body.textContent = '';

        filteredResults.forEach(function (result, index) {
            var row = document.createElement('tr');
            if (index < 3) {
                row.className = 'leaderboard-podium';
            }
            if (result.underReview) {
                row.className += (row.className ? ' ' : '') + 'team-under-review';
                row.title = 'Additional verification is currently in progress.';
            }

            var rank = document.createElement('td');
            rank.className = 'rank-column';
            var rankValue = document.createElement('span');
            rankValue.className = 'leaderboard-rank';
            rankValue.textContent = index + 1;
            rank.appendChild(rankValue);

            var team = document.createElement('th');
            team.scope = 'row';
            team.textContent = result.team;
            if (result.underReview) {
                var verification = document.createElement('span');
                verification.className = 'verification-key';
                verification.textContent = ' *';
                verification.setAttribute('aria-label', 'Additional verification is currently in progress');
                team.appendChild(verification);
            }

            row.appendChild(rank);
            row.appendChild(team);
            row.appendChild(trackCell(result.track));
            row.appendChild(metricCell(result.composite, true));
            row.appendChild(metricCell(result.ndcg));
            row.appendChild(metricCell(result.catalog));
            row.appendChild(metricCell(result.lexical));
            row.appendChild(metricCell(result.judge));
            row.appendChild(codeCell(result));
            body.appendChild(row);
        });

        var trackLabel = track === 'all' ? 'All' : track.charAt(0).toUpperCase() + track.slice(1);
        summary.textContent = trackLabel + ' \u00b7 ' + filteredResults.length +
            ' teams \u00b7 Composite Score, descending';

        Array.prototype.forEach.call(tabs, function (tab) {
            var isActive = tab.getAttribute('data-results-track') === track;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', String(isActive));
        });
    }

    Array.prototype.forEach.call(tabs, function (tab) {
        tab.addEventListener('click', function () {
            renderLeaderboard(tab.getAttribute('data-results-track'));
        });
    });

    renderLeaderboard('all');
}());
