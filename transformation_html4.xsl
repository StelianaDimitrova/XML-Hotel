<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body>
                <h1 align="center">Дейности в хотела</h1>
                <table border="4" align="center">
                    <tr>
                        <th>Вид дейност</th>
                        <th>Домакин</th>
                        <th>Брой хора</th>
                        <th>Възрастово ограничение</th>
                        <th>Продължителност</th>
                    </tr>
                    <xsl:for-each select="hotel/hall/activity">
                        <tr>
                            <td><xsl:value-of select="@type"/></td>
                            <td><xsl:call-template name="host"/></td>
                            <td><xsl:call-template name="number_of_people"/></td>
                            <td><xsl:call-template name="age_restrictions"/></td>
                            <td><xsl:call-template name="duration"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template name="host">
        <xsl:value-of select="host/."/>
    </xsl:template>

    <xsl:template name="number_of_people">
        <xsl:value-of select="number_of_people/."/>
    </xsl:template>

    <xsl:template name="age_restrictions">
        <xsl:value-of select="age_restrictions/."/>
    </xsl:template>

    <xsl:template name="duration">
        <xsl:value-of select="duration/."/>
    </xsl:template>

</xsl:stylesheet>