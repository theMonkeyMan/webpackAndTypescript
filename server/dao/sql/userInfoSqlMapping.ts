const userInfoSqlMapping = {
    insert:'INSERT INTO userInfo(name, age,sex) VALUES(?,?,?)',
    update:'update userInfo set age=? where id=?',
    delete: 'delete from userInfo where id=?',
    queryById: 'select * from userInfo where id=?',
    queryAll: 'select * from userInfo'
};

export default userInfoSqlMapping;