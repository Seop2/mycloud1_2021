<template>
    <div>
        <section class="hero is-warning">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-chart-bar"></i>주식 data 
                </p>
                <p class="subtitle">
                    Firebase 활용
                </p>
            </div>
        </section>
        <hr/>
        <section class="columns">
            <div class="column">
                <table class="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>주식 이름</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="pos in stockNames1">
                            <tr :key="pos">
                                <td>{{pos}}</td>
                                <td>{{stockNames1 [pos - 1 ]}}</td>
                            </tr>
                        </template>
                        <template v-for="pos in stockNames2">
                            <tr :key="pos">
                                <td>{{pos}}</td>
                                <td>{{stockNames2 [pos - 1 ]}}</td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
            <div class="column"></div>
        </section>
    </div>
</template>
<script>
    import frDB from '~/plugins/FirebaseDB';
    export default{
        date(){
            return { stockNames1: [], stockNames2: [] };
        },
        mounted(){
            frDB.ref('KOSDAQ').child('names').get().then((snapshot)=>{
                if(snapshot.exist()){
                    stockNames1.push(snapshot.val());
                }
            });
            frDB.ref('KOSPI').child('names').get().then((snapshot)=>{
                if(snapshot.exist()){
                    stockNames2.push(snapshot.val());
                }
            });
        }
    };
</script>