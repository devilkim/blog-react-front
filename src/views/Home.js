import React from 'react';

import Menu from '../components/Menu';
import Container from '../components/Container';
import MainView from '../components/MainView';

import Header from '../subviews/Header';
import BlogList from '../subviews/BlogList';
import Footer from '../subviews/Footer';

import TagWidget from '../subviews/widgets/TagWidget';

function Home() {
    const data = [
        {no: 10, title: '검색포털 시스템 아키텍처', date: '19.07.03(금)', tags: [{no: 1, title: 'elk'}, {no: 1, title: 'appsearch'}]},
        {no: 7, title: '개발지원팀 워크숍 소개', date: '19.07.01(화)', tags: [{no: 1, title: '넥슨'}, {no: 1, title: '개발지원팀'}, {no: 1, title: '워크숍'}]},
        {no: 5, title: '컨테이너와 컨테이너 오케스트레이션 툴에 대한 소개', date: '19.06.30(수)', tags: [{no: 1, title: 'docker'}, {no: 1, title: 'kubernates'}]},
        {no: 4, title: '2019년 7월 파트 벙', date: '19.06.22(목)', tags: [{no: 1, title: '넥슨'}, {no: 1, title: '알콜벙'}]},
        {no: 2, title: '넥라 성남(갈마치, 강남 트리오, 여우고개) 벙', date: '19.06.12(월)', tags: [{no: 1, title: '넥라'}, {no: 1, title: '라이딩벙'}]}
    ];
    const tags = [
        {no: 1, title: '넥슨'}, 
        {no: 1, title: '넥라'}, 
        {no: 1, title: 'docker'}, 
        {no: 1, title: 'elk'}
    ]
  return (
    <Container>
        <Header title='The devilkim`s blog' />
        <MainView>
            <BlogList title='Recently' data={data} handleClickItem={(type, item) => {console.log(type, item)}} />            
        </MainView>
        <Menu>
            <TagWidget title='Tags' data={tags} handleClickTag={(tag) => {console.log(tag)}} />            
        </Menu>        
        <Footer message='Copyright 2019. devilkim. All rights reserved.' />
    </Container>
  );
}

export default Home;
