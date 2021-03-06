/*
 * Copyright (c) 2017, MaibornWolff GmbH
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  * Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *  * Neither the name of  nor the names of its contributors may be used to
 *    endorse or promote products derived from this software without specific
 *    prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

package de.maibornwolff.codecharta.model;

import com.google.common.collect.ImmutableList;
import de.maibornwolff.codecharta.model.PathFactory;
import de.maibornwolff.codecharta.model.Path;
import org.junit.Test;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

public class PathFactoryTest {

    @Test
    public void empty_dir_should_valid_path() {
        Path path = PathFactory.fromFileSystemPath("");
        assertThat(path.isSingle(), is(true));
        assertThat(path.head(), is(""));
    }

    @Test
    public void empty_dir_should_be_trivial() {
        assertThat(PathFactory.fromFileSystemPath("").isTrivial(), is(true));
        assertThat(PathFactory.fromFileSystemPath("/").isTrivial(), is(true));
    }

    @Test
    public void leading_slash_should_define_same_hierarchical_position() {
        List<String> pathsWithoutSlash = ImmutableList.of(
                "file", "subdir/file", "subdir/subdir/file", "subdir/othersubdir/file"
        );

        for (String path : pathsWithoutSlash) {
            assertThat(PathFactory.fromFileSystemPath(path), is(PathFactory.fromFileSystemPath("/" + path)));
        }
    }

    @Test
    public void no_subdirs_should_be_leafs() {
        assertThat(PathFactory.fromFileSystemPath("somename").isSingle(), is(true));
    }

    @Test
    public void subdirs_should_not_be_leafs() {
        assertThat(PathFactory.fromFileSystemPath("subdir/somename").isSingle(), is(false));
    }

    @Test
    public void descendants_should_be_same_as_path_descendant() {
        assertThat(PathFactory.fromFileSystemPath("subdir/somename").tail(), is(new Path(Arrays.asList("somename"))));
        assertThat(PathFactory.fromFileSystemPath("subdir/anothersubdir/somename").tail(), is(new Path(Arrays.asList("anothersubdir", "somename"))));
    }

    @Test
    public void root_should_be_name_of_leading_path() {
        assertThat(PathFactory.fromFileSystemPath("leadingpath/somename").head(), is("leadingpath"));
        assertThat(PathFactory.fromFileSystemPath("leadingpath/intermediatepath/somename").head(), is("leadingpath"));
    }

    @Test
    public void getRoot_should_return_leaf_if_already_leaf() {
        Path leaf = PathFactory.fromFileSystemPath("leaf");
        String actual = leaf.head();
        assertThat(actual, is("leaf"));
    }

    @Test
    public void tail_should_return_trivial_element_if_leaf() {
        Path trivialElement = PathFactory.fromFileSystemPath("leaf").tail();
        assertThat(trivialElement.isTrivial(), is(true));
    }
}