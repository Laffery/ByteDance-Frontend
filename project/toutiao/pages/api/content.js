const content = {
    title: '机场撒泼？北京大兴机场一女子强行冲闯登机口，倚在机舱门上致航班延误，被行拘十日',
    hot_time: '2021-04-29 10:37:40',
    tag: '原创',
    author: '潇湘晨报',
    content: (
        `
        <img class={styles.article_img} src="https://p6-tt.byteimg.com/origin/pgc-image/SVw0U58BnqHKsh?from=pc" img_width="431" img_height="249" alt="机场撒泼？北京大兴机场一女子强行冲闯登机口，倚在机舱门上致航班延误，被行拘十日" inline="0"/>
        <p>4月24日，北京大兴国际机场，一女子强行冲闯登机口的新闻引发网友关注。视频中，一名女子不顾工作人员劝阻，强行冲闯登机口，造成航班延误，因其行为构成扰乱公共场所秩序，目前，这名女子被处以行政拘留十日。</p>
        <p>据现场视频显示，当时这名女子不顾工作人员劝阻，强行冲闯登机口，然后在登机廊桥又多次挣脱工作人员的阻拦来到飞机附近，民警迅速赶到现场，发现这名女子倚靠在机舱门上，情绪激动。</p>
        <img class={styles.article_img} src="https://p6-tt.byteimg.com/origin/pgc-image/SVw0U5o5J1ovTJ?from=pc" img_width="426" img_height="249" alt="机场撒泼？北京大兴机场一女子强行冲闯登机口，倚在机舱门上致航班延误，被行拘十日" inline="0"/>
        <p>民警现场对该女子婉言相劝：“这不是你的航班，你上不了，你没有这个航班的票。”但是该女子完全不听民警的解释，咬口称自己的航班已经到了时间，但民警称该女子的航班为下一趟。民警向其解释这种行为的后果，称其扰乱了公共场所秩序，可以对其强制传唤，但该女子仍不听劝阻。最后沟通无果民警将该女子强行带离现场。</p>
        <p>首都机场公安局大兴机场航站区派出所民警表示，经过核实，该女子并不是该趟航班的旅客。现场处置民警经过多次的劝阻和警告无效后，决定将该女子强制带离现场。但此时该航班，已经延误了45分钟。该女子的行为已构成扰乱公共场所秩序，首都机场公安局根据《治安管理处罚法》第23条的规定，对该女子作出行政拘留10日的处罚。</p>
        <img class={styles.article_img} src="https://p3-tt.byteimg.com/origin/pgc-image/SVw0U7LG1d6OST?from=pc" img_width="554" img_height="422" alt="机场撒泼？北京大兴机场一女子强行冲闯登机口，倚在机舱门上致航班延误，被行拘十日" inline="0"/>
        <img class={styles.article_img} src="https://p3-tt.byteimg.com/origin/pgc-image/SVw0U8O1CiidJf?from=pc" img_width="554" img_height="163" alt="机场撒泼？北京大兴机场一女子强行冲闯登机口，倚在机舱门上致航班延误，被行拘十日" inline="0"/>
        <img class={styles.article_img} src="https://p1-tt.byteimg.com/origin/pgc-image/SVw0U8pAvRtnDu?from=pc" img_width="554" img_height="220" alt="机场撒泼？北京大兴机场一女子强行冲闯登机口，倚在机舱门上致航班延误，被行拘十日" inline="0"/>
        <p>对此，网友纷纷留言对该女子表示指责：“文明时代的野蛮人以身试法，不可取”、“竟在机场撒起了泼”；也有网友对该女子的行为表示怀疑：“为什么要冲关登不是自己航班的飞机？建议调查清楚”。</p><p>根据《治安管理处罚法》第23条，扰乱车站、港口、码头、机场、商场、公园、展览馆或者其他公共场所秩序的，处警告或者二百元以下罚款；情节较重的，处五日以上十日以下拘留，可以并处五百元以下罚款。</p>
        <p>潇湘晨报记者张岳 实习生王鹏辉 综合央视新闻报道</p>
        <p>【来源：潇湘晨报】</p>
        <p>版权归原作者所有，向原创致敬</p>
        `
    )
}

export default (req, res) => {
    res.status(200).json({ data: content })
}