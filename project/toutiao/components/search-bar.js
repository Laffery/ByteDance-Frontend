import styles from '../styles/search-bar.module.css'

function SearchBar() {
    return (
        <div className={styles.search_bar}>
            <input className={styles.search_input} type="text" placeholder="搜索站内资讯、视频或用户"/>       
            <button className={styles.search_btn} type="button">搜索</button>
        </div>
    )
}

export default SearchBar
